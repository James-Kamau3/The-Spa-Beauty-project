"""empty message

Revision ID: dbc581a2a414
Revises: c3cf47096279
Create Date: 2023-07-07 00:14:45.931805

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dbc581a2a414'
down_revision = 'c3cf47096279'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('appointments', sa.Column('total_amount', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('appointments', 'total_amount')
    # ### end Alembic commands ###
