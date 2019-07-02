class Group < ApplicationRecord
    has_and_belongs_to_many :users
    belongs_to :type

    validates :name, presence: true
end
