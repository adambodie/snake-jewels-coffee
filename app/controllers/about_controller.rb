class AboutController < ApplicationController
  def index
    @horizontal_ad = ["Boring", "Viagra", "Human", "Guns"]
    horizontal_number = (@horizontal_ad.length * rand).to_i
    @horizontal_name = @horizontal_ad[horizontal_number]
    
    @vertical_ad = ["GOP", "Money", "Starbucks", "Dog"]
    vertical_number = (@vertical_ad.length * rand).to_i
    @vertical_name = @vertical_ad[vertical_number]
  end
end
