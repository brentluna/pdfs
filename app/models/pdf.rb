class Pdf < ApplicationRecord
  validates :user, :url, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

end
