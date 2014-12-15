class ItemsController < ApplicationController
  def new
    
  end
  def create
    @item = Item.new(article_params)
 
  @item.save
  redirect_to @item
end
 
private
  def item_params
    params.require(:item).permit(:title, :size, :description, :price)
  end
  
end
