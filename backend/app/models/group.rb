class Group < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :type

    has_many :group_events

    has_many :applies
    has_many :applicants, through: :applies

    validates :name, presence: true

    after_create_commit :add_type_name
    after_create_commit :add_founder

    def add_type_name
        self.update(type_name: self.type.name)
    end

    def add_founder
        GroupsUser.create(user_id: self.founder_id, group_id: self.id)
    end

    def upcoming_events
        events = self.group_events.select do |e|
            e.date > Time.zone.now.to_datetime
        end
        events
    end
end
