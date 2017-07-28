class CreateInvoices < ActiveRecord::Migration[5.1]
  def change
    create_table :invoices do |t|
      t.references :user, foreign_key: true
      t.date :invoice_date
      t.decimal :price
      t.boolean :has_payed
    end
  end
end
