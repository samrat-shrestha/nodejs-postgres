@REM export PGPASSWORD='123456' This helps to set the password so that we dont need to enter it 3 times as we are doing it right now(linux only).

echo "Configuring database:monstersdb"

dropdb -U monster_user monstersdb
createdb -U monster_user monstersdb

psql -U monster_user -d monstersdb < sql/monsters.sql

echo "monstersdb configured"