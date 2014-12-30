class WelcomeController < ApplicationController
  def index
    @horizontal_ad = ["Boring", "Viagra", "Human"]
    horizontal_number = (@horizontal_ad.length * rand).to_i
    @horizontal_name = @horizontal_ad[horizontal_number]
    
    @vertical_ad = ["GOP", "Money", "Starbucks"]
    vertical_number = (@vertical_ad.length * rand).to_i
    @vertical_name = @vertical_ad[vertical_number]
  end  
end
