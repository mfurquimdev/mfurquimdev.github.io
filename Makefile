.PHONY: all

all:
	pnpm run build
	echo -n "mfurquim.dev" | tee dist/CNAME
	git add -f dist
