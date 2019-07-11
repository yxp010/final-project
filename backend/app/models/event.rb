class Event < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :type

    after_create_commit :add_type_name

    def add_type_name
        self.update(type_name: self.type.name)
    end

    # def self.explore_events(city = 'Houston')
    #     {events: }
    # end
end
