class AddGravatarHashToCommentsTable < ActiveRecord::Migration
  def change
    add_column :comments, :gravatar_hash, :string
  end
end
