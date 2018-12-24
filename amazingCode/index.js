const csvUtil = require('./utils/CSVUtils');
const fs = require('fs');
const path = require('path');
var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp('api-key');
const MD5 = require("crypto-js/md5"); // mailchimp user ID is the user's email with md5 encryption

// Read from CSV
// Create an array with user ids

// ELIAS
// Read from the array (usersId) and change user status
/**
 * Get mailchimp id from email.
 * From version of MailChimp API v3 the user id
 * is the md5 encrypted email.
 *
 * @param {members} email email ;)
 * @return {String} md5 encrypted email
 */
const _getMailChimpId = (email) => MD5(email).toString();

const updateUser = (subscriber_hash, listId) => {
  const requestObj = { status: 'subscribed' };

  return mailchimp.patch(`/lists/${listId}/members/${subscriber_hash}`, requestObj);
}


/**
 * Parse  Adyen CSV to array.
 */
const csvFileName = `unsubscribed_segment_export_6e2c88b0cf.csv`;
const csvFile = fs.readFileSync(path.join(__dirname, csvFileName));
const listId = 'list-id';

return csvUtil.parseCSV(csvFile)
  .then(res => {
    const members = res
      .filter((i, idx) => idx !== 0)
      .map(i => {
        return {
          email_address : i[0],
          status : 'subscribed'
        };
      });

    console.log(members);
    const requestObj = {
      members: members,
      update_existing: true,
    };

    return mailchimp.post(`/lists/${listId}`, requestObj)
      .then(result => console.log(result))
      .catch(error => console.error(error))
  })
  .then(result => console.log(result))
  .catch(error => {
    console.error(error);
    return error;
  });


// const fetch = (userId)=> return new Promise()

// const arrUserIds = array[1,2,3,4,5,6,7,8];
// const promiseArr = arrUserIds.map(i => fetch(i));
// Promise.all(promiseArr).then(res)