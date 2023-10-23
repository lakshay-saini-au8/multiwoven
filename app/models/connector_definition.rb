# frozen_string_literal: true

class ConnectorDefinition < ApplicationRecord
  validates :connector_type, presence: true
  validates :source_type, presence: true, if: :source?
  validates :spec, presence: true
  validates :meta_data, presence: true

  enum :connector_type, %i[source destination]
  enum :source_type, %i[database api]
end
