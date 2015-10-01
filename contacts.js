/**
 * Implements a simple contact list.
 * Created by Clint on 10/1/2015.
 * Original program created by Brian Jyriel Boardo.
 */

/* globals _ */
/* exported Contact, ContactList */

/**
 * An object containing contact information for an individual.
 * @param firstName  A person's first name.
 * @param lastName  A person's last name.
 * @param address  A person's address.
 * @param zipcode  A person's zip code.
 * @param telNum  A person's telephone number.
 * @constructor  Object constructor.
 */
var Contact = function (firstName, lastName, address, zipcode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;
  var callNum = 0;
  this.call = function () {
    callNum++;
    return true;
  };

  this.numCalls = function () {
    return callNum;
  };

};

/**
 * Creates and manipulates a contact list through various functions.
 * @function addContact()  Accepts a Contact instance and adds it to an internal data structure.
 * @function numContacts()  Returns the number of contacts in this ContactList().
 * @function findContact()  Is passed a String and returns all of the Contacts with that lastName.
 * @function deleteContact()  Is passed a firstName and lastName and deletes all matching Contacts.
 * @function listContacts()  Returns a string containing the contacts sorted by lastName.
 * @constructor  Defines the functions above.
 */
var ContactList = function () {

  var contactList = [];

  this.addContact = function (contact) {
    contactList.push(contact);
    return true;
  };

  this.numContacts = function () {
    return contactList.length;
  };

  this.findContact = function (last) {
    var lastNameList = [];
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].lastName === last) {
        lastNameList.push(contactList[i]);
      }
    }
    return lastNameList;
  };

  this.deleteContact = function (first, last) {
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].firstName === first && contactList[i].lastName === last) {
        contactList.splice(i, 1);
      }
    }

  };

  this.listContacts = function () {
    //contactList.sort(compareLast());
    //return contactList;
    return _.sortBy(contactList, "lastName");
  };

};
