
cd ~/hyperdata/transmissions # my local path
./del2.sh
./trans md-to-sparqlstore ~/hyperdata/mcp-o/docs/postcraft
./trans postcraft-statics ~/hyperdata/mcp-o/docs/postcraft #
./trans sparqlstore-to-html ~/hyperdata/mcp-o/docs/postcraft
./trans sparqlstore-to-site-indexes ~/hyperdata/mcp-o/docs/postcraft
