const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// PIP telephone appointment journey logic

// Run this code when a form is submitted to 'interpreter-answer'
router.post('/interpreter-answer', function (req, res) {

  // Make a variable and give it the value from 'need-interpreter'
  var interpreterYesNo = req.session.data['need-interpreter']

  // Check whether the variable matches a condition
  if (interpreterYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/current/pip-ta/interpreter-language')
  } else {
    // Send user to next page
    res.redirect('/current/pip-ta/same-sex-hcp')
  }

})

// Run this code when a form is submitted to 'ucb-answer'
router.post('/ucb-answer', function (req, res) {

  // Make a variable and give it the value from 'UCB-marker'
  var ucbYesNo = req.session.data['UCB-marker']

  // Check whether the variable matches a condition
  if (ucbYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/current/pip-ta/UCB-detail')
  } else {
    // Send user to next page
    res.redirect('/current/pip-ta/claimant-support')
  }

})

// Run this code when a form is submitted to 'app-preferences'
router.post('/app-preferences', function (req, res) {

  // Make a variable and give it the value from 'UCB-marker'
  var appprefsYesNo = req.session.data['app-preferences']

  // Check whether the variable matches a condition
  if (appprefsYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/current/pip-ta/app-date-time-O6-page-3')
  } else {
    // Send user to next page
    res.redirect('/current/pip-ta/app-date-time-O6-page-2')
  }

})

// Run this code when a form is submitted to 'cancel-answer'
router.post('/cancel-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var cancelYesNo = req.session.data['cancel-booking']

  // Check whether the variable matches a condition
  if (cancelYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/current/status-led-design/book-assessment')
  } else {
    // Send user to previous page
    res.redirect('javascript:history.go(-1)')
  }

})

// WCA face to face appointment journey logic

// Run this code when a form is submitted to 'wca-interpreter-answer'
router.post('/wca-interpreter-answer', function (req, res) {

  // Make a variable and give it the value from 'need-interpreter'
  var interpreterWCAYesNo = req.session.data['need-wca-interpreter']

  // Check whether the variable matches a condition
  if (interpreterWCAYesNo == "Yes"){
    // Send user to what language page
    res.redirect('/current/wca-f2f/interpreter-language')
  } else {
    // Send user to next page
    res.redirect('/current/wca-f2f/same-sex-hcp')
  }

})

// Run this code when a form is submitted to 'cancel-answer'
router.post('/cancel-wca-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var cancelWCAYesNo = req.session.data['cancel-wca-booking']

  // Check whether the variable matches a condition
  if (cancelWCAYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/current/status-led-design/book-assessment')
  } else {
    // Send user to previous page
    res.redirect('javascript:history.go(-1)')
  }

})

// Run this code when a form is submitted to 'cancel-answer'
router.post('/deactivate-hcp-answer', function (req, res) {

  // Make a variable and give it the value from 'deactivate-HCP'
  var deactivateHCPYesNo = req.session.data['deactivate-hcp']

  // Check whether the variable matches a condition
  if (deactivateHCPYesNo == "Yes"){
    // Send user to caseload page
    res.redirect('/current/HCP-admin/HCP-profiles-deactivated-success')
  } else {
    // Send user to previous page
    res.redirect('/current/HCP-admin/existing-HCP-view')
  }

})

module.exports = router
