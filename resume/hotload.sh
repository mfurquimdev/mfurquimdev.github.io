#!/bin/bash

ppid=$$

function watch_file {
    inotifywait . \
        --monitor \
        --quiet \
        --event close_write \
        --timefmt '%Y-%m-%dT%H:%M:%S' \
        --format '%T %w %f %e' \
        --include ".*.tex|.*.cls" \
        | while read -r datetime path filename event;
    do
        echo -e "\n\033[1;7;37m$datetime: $path$filename was $event\033[0;1;0m";
        kill -s SIGUSR1 $ppid;
    done
}
watch_file & notify_pid="$!"

trap "{ kill --verbose -s SIGKILL -- $notify_pid $ppid; exit 255; }" SIGINT SIGTERM
trap "{ ./execute.sh; }" SIGUSR1

while :;
do
    sleep 1
done
