var OSinfo = require('../modules/OSinfo');
OSinfo.print();


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                getOSinfo();
                break;
                
            break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});