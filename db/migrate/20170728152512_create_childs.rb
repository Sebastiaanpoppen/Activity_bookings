class CreateChilds < ActiveRecord::Migration[5.1]
  def change
    create_table :children do |t|
      t.string :name
      t.date  :date_of_birth
      t.boolean :is_male
      t.references :user, foreign_key: true
    end
  end
end
