class CommentsController < ApplicationController

  def index
    comments = Comment.order("created_at DESC")
    render json: comments
  end


  def create
    comment = Comment.new(name: params["name"], email: params["email"], website: params["website"], comment: params["comment"])
    comment.save
    render :nothing => true

  end

end