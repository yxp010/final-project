class Event < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :type

    after_create_commit :add_type_name
    after_create_commit :add_founder

    def add_founder
        EventsUser.create(user_id: self.founder_id, event_id: self.id)
        Notification.create(notification_type: 'message', user_id: self.founder_id, message: "You sccussfully created the game (#{self.name}).")
    end

    def add_type_name
        self.update(type_name: self.type.name)
    end

    # def self.explore_events(city = 'Houston')
    #     {events: }
    # end
end
