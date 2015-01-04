class SearchController < ApplicationController
  def index
    @horizontal_ad = ["Boring", "Viagra", "Human", "Guns", "Diet", "Gay"]
    horizontal_number = (@horizontal_ad.length * rand).to_i
    @horizontal_name = @horizontal_ad[horizontal_number]
    
    @vertical_ad = ["GOP", "Money", "Starbucks", "Dog", "Beer", "Surgery"]
    vertical_number = (@vertical_ad.length * rand).to_i
    @vertical_name = @vertical_ad[vertical_number]
  end
end
