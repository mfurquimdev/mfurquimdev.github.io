all:
	@pdflatex resume.tex
	@convert -density 150 resume.pdf -flatten -alpha off  resume.png
	$(MAKE) clean

clean:
	@rm -rvf *.bcf *.aux *.log *.out *.xml
