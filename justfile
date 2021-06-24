# justfile
#
# author: dlegaspi@bu.edu

dev-hash:
    @echo 'copying dev-hash/config.js'
    @cp config/dev-hash/config.js js/config.js

dev-html5:
    @echo 'copying dev-html5/config.js'
    @cp config/dev-html5/config.js js/config.js

prod:
    @echo 'copying artifacts to /dist folder'
    @cp -R js dist/
    @cp -R images dist/
    @cp -R audio dist/
    @cp -R css dist/
    @cp dalegaspi.vcf dist/
    @cp index.html dist/
    @cp README.md dist/
    @cp robots.txt dist/
    @echo 'copying prod/config.js'
    @cp config/prod/config.js dist/js/config.js
    @for file in `ls dist/js/*.js`; do \
        javascript-obfuscator $file --log false --compact true --output $file; \
    done
    @for file in `ls dist/js/components/*.js`; do \
        javascript-obfuscator $file --log false --compact true --output $file; \
    done
    @for file in `ls dist/css/*.css`; do \
        uglifycss $file --output $file; \
    done

prod-no-uglify:
    @echo 'copying artifacts to /dist folder'
    @cp -R js dist/
    @cp -R images dist/
    @cp -R audio dist/
    @cp -R css dist/
    @cp dalegaspi.vcf dist/
    @cp index.html dist/
    @cp README.md dist/
    @cp robots.txt dist/
    @echo 'copying prod/config.js'
    @cp -f config/prod/config.js dist/js/config.js