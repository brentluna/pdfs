require 'rails_helper'

RSpec.describe User, :type => :model do
  describe "password encryption" do
    it 'does not save passwords to the database' do
      User.create!(username: 'pwtester', password: 'password')
      user = User.find_by(username: 'pwtester')
      expect(user.password).not_to be('password')
    end

    it 'enrypts the password using BCrypt' do 
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'pwtester', password: 'password')
    end
  end
  it 'validates uniqueness of username' do 
    User.create!(username: 'pwtester', password: 'password')
    should validate_uniqueness_of(:username)
  end
    it {should validate_presence_of(:username)}
    it {should have_many(:pdfs)}
  
end

