require 'digest/md5'

class CommentsController < ApplicationController

  def index
    comments = Comment.order("created_at DESC")
    render json: comments.as_json
  end

  def create
    comment = Comment.new(name: params["name"], email: params["email"], website: params["website"], comment: params["comment"])
    if params["email"] != ""
      comment.gravatar_hash = gravatar(comment)
    end
    comment.save
    render :nothing => true
  end

  private

  def gravatar(comment)
    Digest::MD5.hexdigest(comment.email)
  end

end