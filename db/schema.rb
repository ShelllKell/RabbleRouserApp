

ActiveRecord::Schema.define(version: 20141016185725) do

  enable_extension "plpgsql"

  create_table "comments", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "website"
    t.string   "comment"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "gravatar_hash"
  end

end
