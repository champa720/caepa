/*global $, jQuery*/
(function ($) {
  'use strict';
  $(function () {

    // Components
    // Badges
    // Buttons
    // Breadcrumbs
    // Cards
    // Chips
    // Collections
    // Footer
    // Forms
    $('select').material_select();
    // Icons
    // Navbar
    $('.button-collapse').sideNav({
      menuWidth: 380,
      edge: 'left',
      closeOnClick: true
    });
    $('.dropdown-button').dropdown({
      hover: true,
      belowOrigin: true,
      constrain_width: false
    });
    // Pagination
    // Preloader

    // JavaScript
    // Collapsible
    $('.collapsible').collapsible({
      accordion : false
    });
    // Dialogs
    $('.tooltipped').tooltip({
      delay: 25
    });
    // Dropdown
    // Media
    $('.slider').slider({
      full_width: true,
      indicators: false,
      transition: 500,
      intervel: 12000,
      height: 460
    });
    // Models
    $('.modal-trigger').leanModal();
    if (document.documentURI === 'http://champa720.github.io/EXP/programs.html/') {
      $('#programs').openModal();
    }
    if (document.documentURI === 'http://champa720.github.io/EXP/') {
      $('#building').openModal();
    }
    // Parallax
    $('.parallax').parallax();
    // Pushpin
    // Scrollfire
    // Scrollspy
    // Sidenav
    // Tabs
    // Transitions
    // Waves


  }); // end of document ready
}(jQuery)); // end of jQuery name space