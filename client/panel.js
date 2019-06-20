/*

Copyright (c) 2019 Cisco and/or its affiliates.

This software is licensed to you under the terms of the Cisco Sample
Code License, Version 1.1 (the "License"). You may obtain a copy of the
License at

               https://developer.cisco.com/docs/licenses

All use of the material herein must be in accordance with the terms of
the License. All rights not expressly granted by the License are
reserved. Unless required by applicable law or agreed to separately in
writing, software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied.

*/


import { Template } from 'meteor/templating';
import { Tasks } from "../imports/api/tasks";

Template.panel.helpers({
  userPollsExist() {
    var userPolls = Tasks.find().fetch();
    return userPolls.length > 0 ? true : false
  },
  userPollisPoll(poll) {
    return poll.pollType == 'poll' ? true : false;
  },
  userPolls() {
    var pollOwnerId = Meteor.userId();
    //var pollOwnerId = "Th94zGtPEDf29CAqX"
    var query = {
      'pollOwnerId': pollOwnerId
    }
    var userPolls = Tasks.find(query).fetch();
    return userPolls
  },

  isActive(pollState) {
    return pollState === 'Running'
  }
});
