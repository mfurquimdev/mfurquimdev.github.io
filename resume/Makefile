all:
	@pdflatex main.tex
	@convert -density 150 main.pdf -flatten -alpha off  main.png
	$(MAKE) clean

clean:
	@rm -rvf *.bcf *.aux *.log *.out *.xml
