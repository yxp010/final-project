

User.create(username: "a", email: 'b', password: 'a')
User.create(username: "c", email: '22', password: 'b')
User.create(username: "d", email: 'b33', password: 'b')
User.create(username: "b", email: 'fffef', password: 'b')

Type.create(name: 'soccer')
Type.create(name: 'basketball')
Type.create(name: 'football')
Type.create(name: 'baseball')
Type.create(name: 'ping pong')

Group.create(description: 'group1 description',name: 'space city', founder_id: 1, type_id: 1, location: 'facebook', lat: 30, lng: -95)
Group.create(description: 'group2 description',name: 'basketball', founder_id: 3, type_id: 2, location: 'google', lat: 29.8, lng: -95)
Group.create(description: 'group3 description',name: '10th floor pingpong', founder_id: 2, type_id: 3, location: 'apple', lat: 29.7, lng: -95)
Group.create(description: 'group4 description',name: 'sy', founder_id: 1, type_id: 1, location: 'facebook', lat: 30, lng: -95)
Group.create(description: 'group5 description',name: 'btball', founder_id: 3, type_id: 2, location: 'google', lat: 29.6, lng: -95)
Group.create(description: 'group6 description',name: '8th floor pingpong', founder_id: 2, type_id: 3, location: 'what', lat: 19.5, lng: -95)

GroupsUser.create(group_id: 1, user_id: 1)
GroupsUser.create(group_id: 1, user_id: 2)
GroupsUser.create(group_id: 1, user_id: 3)

Event.create(description: 'game1 description',name: 'space city', founder_id: 1, type_id: 1, location: 'event location test1', lat: 30, lng: -95)
Event.create(description: 'game2 description',name: 'basketball', founder_id: 3, type_id: 2, location: 'event location test2', lat: 29.8, lng: -95.3)
Event.create(description: 'game3 description',name: '10th floor pingpong', founder_id: 2, type_id: 3, location: 'event location test3', lat: 29.8, lng: -95.1)
Event.create(description: 'game4 description',name: 'sy', founder_id: 1, type_id: 1, location: 'facebook', lat: 30.1, lng: -95.2)
Event.create(description: 'game5 description',name: 'btball', founder_id: 3, type_id: 2, location: 'google', lat: 29.8, lng: -95.09)
Event.create(description: 'game6 description',name: '8th floor pingpong', founder_id: 2, type_id: 3, location: 'what', lat: 19.5, lng: -95)

EventsUser.create(user_id: 3, event_id: 1)
EventsUser.create(user_id: 1, event_id: 1)
EventsUser.create(user_id: 4, event_id: 1)

Tournament.create(description: 'Tournament1 description', name: 'space city', founder_id: 1, type_id: 1, location: 'tournament location test1', lat: 30.3, lng: -95.2)
Tournament.create(description: 'Tournament2 description', name: 'basketball', founder_id: 3, type_id: 2, location: 'tournament location test2', lat: 29.6, lng: -95.1)
Tournament.create(description: 'Tournament3 description', name: '10th floor pingpong', founder_id: 2, type_id: 3, location: 'tournament location test3', lat: 29.9, lng: -95.2)
Tournament.create(description: 'Tournament4 description', name: 'sy', founder_id: 1, type_id: 1, location: 'facebook', lat: 30.11, lng: -95.3)
Tournament.create(description: 'Tournament5 description', name: 'btball', founder_id: 3, type_id: 2, location: 'google', lat: 29.1, lng: -95)
Tournament.create(description: 'Tournament6 description', name: '8th floor pingpong', founder_id: 2, type_id: 3, location: 'what', lat: 19.5, lng: -95)

TournamentsUser.create(user_id: 3, tournament_id: 1)
TournamentsUser.create(user_id: 1, tournament_id: 1)
TournamentsUser.create(user_id: 4, tournament_id: 1)