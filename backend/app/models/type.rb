class Type < ApplicationRecord

    has_many :groups
    has_many :events
    has_many :tournaments
end
