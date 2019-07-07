class GroupEvent < ApplicationRecord
    belongs_to :group
    belongs_to :type

    has_many :group_events_users
    has_many :users, through: :group_events_users
end
