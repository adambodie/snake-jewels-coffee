class ItemsController < ApplicationController
  
  http_basic_authenticate_with name: "aduo3000", password: "ZMxnCb$0", except: [:index, :show, :search]
  
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
    @q = Item.search(params[:q])
    @items = @q.result(distinct: true)
  end 
  
  def search
    index
    render :index
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

  def server
  
  end  
private
  def item_params
    params.require(:item).permit(:title, :size, :description, :price, :picture)
  end
  
end
