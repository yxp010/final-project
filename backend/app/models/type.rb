class Type < ApplicationRecord

    has_many :groups
    has_many :events

end
