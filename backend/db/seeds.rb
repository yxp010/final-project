

User.create(username: "a", email: 'b', password: 'a')
User.create(username: "c", email: '22', password: 'b')
User.create(username: "d", email: 'b33', password: 'b')
User.create(username: "b", email: 'fffef', password: 'b')

Type.create(name: 'soccer')
Type.create(name: 'basketball')
Type.create(name: 'football')
Type.create(name: 'baseball')
Type.create(name: 'ping pong')

Group.create(name: 'space city', founder_id: 1, type_id: 1)
Group.create(name: 'basketball', founder_id: 3, type_id: 2)
Group.create(name: '10th floor pingpong', founder_id: 2, type_id: 3)

GroupsUser.create(group_id: 1, user_id: 1)
GroupsUser.create(group_id: 1, user_id: 2)
GroupsUser.create(group_id: 1, user_id: 3)

Event.create(description: 'ping pong game', founder_id: 3, location: '10th floor', type_id: 5)

EventsUser.create(user_id: 3, event_id: 1)
EventsUser.create(user_id: 1, event_id: 1)
EventsUser.create(user_id: 4, event_id: 1)
