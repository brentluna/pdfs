require 'rails_helper'

RSpec.describe Pdf, :type => :model do 
 it {should belong_to(:user)} 
 it {should validate_presence_of(:user)}
 it {should validate_presence_of(:url)}
end
