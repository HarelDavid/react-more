(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactMore"] = factory(require("react"), require("react-dom"));
	else
		root["ReactMore"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);

	module.exports = React.createClass({
	  displayName: 'More',

	  propTypes: {
	    lines: React.PropTypes.number
	  },

	  getDefaultProps:function() {
	    return {
	      lines: 2,
	      backgroundColor: 'white'
	    };
	  },

	  getInitialState:function() {
	    return {
	      expanded: false
	    }
	  },

	  onResize:function() {
	    this.recheckHeight();
	  },

	  recheckHeight:function() {
	    var mainDiv = ReactDOM.findDOMNode(this);
	    var insideBigger = (mainDiv.scrollHeight > (mainDiv.clientHeight + 4));

	    var moreLink = this.refs.moreLink;

	    if (moreLink) {
	      if (insideBigger) {
	        moreLink.style.display = 'block';
	      } else {
	        moreLink.style.display = 'none';
	      }
	    }
	  },

	  componentDidMount: function() {
	    window.addEventListener('resize', this.recheckHeight);
	    this.recheckHeight();
	  },

	  componentWillUnmount: function() {
	    window.removeEventListener('resize', this.recheckHeight);
	  },

	  componentDidUpdate:function() {
	    this.recheckHeight();
	  },

	  toggleExpansion:function(event) {
	    this.setState({expanded: !this.state.expanded});
	  },

	  getElementStyles:function() {
	    var lineHeight = 20;
	    var height = this.props.lines * lineHeight;

	    var result = {
	      lineHeight:      ("" + lineHeight + "px"),
	      backgroundColor: this.props.backgroundColor
	    };
	    if (!this.state.expanded) {
	      result.maxHeight = ("" + height + "px")
	    }
	    return result;
	  },

	  render:function() {
	    var linkStyles = {
	      backgroundImage: ("linear-gradient(to right, transparent, " + this.props.backgroundColor + " 80%)")
	    };

	    var onClickMore = function(event)  {
	      event.preventDefault();
	      this.toggleExpansion();
	    }.bind(this);

	    var toggleLink = null;

	    if (this.state.expanded) {
	      toggleLink = React.createElement("a", {className: "contractMore toggleMore", ref: "lessLink", onClick: onClickMore}, "less")
	    } else {
	      toggleLink = React.createElement("a", {className: "expandMore toggleMore", ref: "moreLink", onClick: onClickMore, style: linkStyles}, "more")
	    }

	    return (
	      React.createElement("div", {className: "hasMore", style: this.getElementStyles()}, 
	        React.createElement("div", {className: "moreContents"}, 
	          this.props.children
	        ), 
	        toggleLink
	      )
	    );
	  },
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;