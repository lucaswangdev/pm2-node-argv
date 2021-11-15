const { argv } = require('process');

/**
 * get argv arguments
 * @returns 
 */
function getArgv(){
	const obj = {};
	const regExp = /--(.+)=(.+)/;
	argv.forEach((val) => {
			let match = val.match(regExp);
			if(match){
				obj[match[1]] = match[2];
			}
	});
	return obj;
}

module.exports = {
  getArgv
}
