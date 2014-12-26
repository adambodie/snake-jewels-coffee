class Item < ActiveRecord::Base
  validates :title, presence: true,
          length: {minimum: 3}
  has_attached_file :picture
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/
end
