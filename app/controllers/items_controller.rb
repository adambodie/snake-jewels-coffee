class ItemsController < ApplicationController
  
  http_basic_authenticate_with name: "aduo3000", password: "ZMxnCb$0", except: [:index, :show]
  
  def new 
    @item = Item.new   
  end
  
  def create
    @item = Item.new(item_params)
 
    if @item.save
      redirect_to @item
    else
      render 'new'
    end    
  end
  
  def show
    @item = Item.find(params[:id])
  end
  
  def index
    @items = Item.all
  end 
  
  def edit
    @item = Item.find(params[:id])
  end
  
  def update
    @item = Item.find(params[:id])
 
    if @item.update(item_params)
      redirect_to @item
    else
      render 'edit'
    end
end

def destroy
  @item = Item.find(params[:id])
  @item.destroy
 
  redirect_to items_path
end

  
private
  def item_params
    params.require(:item).permit(:title, :size, :description, :price)
  end
  
end
