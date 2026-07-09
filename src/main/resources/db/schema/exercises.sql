create table if not exists exercises (
    id uuid primary key,
    scope varchar(20) not null,
    owner_user_id uuid null,
    name varchar(120) not null,
    name_pt varchar(160) not null,
    movement_pattern varchar(60) not null,
    body_area varchar(60) not null,
    equipment_type varchar(60) not null,
    default_safety_notes text null,
    active boolean not null default true,
    created_at timestamptz not null default current_timestamp,
    updated_at timestamptz not null default current_timestamp,
    constraint ck_exercises_scope check (scope in ('GLOBAL', 'USER')),
    constraint ck_exercises_owner_scope check (
        (scope = 'GLOBAL' and owner_user_id is null)
        or (scope = 'USER' and owner_user_id is not null)
    )
);

create unique index if not exists ux_exercises_global_name_lower
    on exercises (lower(name)) where scope = 'GLOBAL';

create unique index if not exists ux_exercises_owner_name_lower
    on exercises (owner_user_id, lower(name)) where scope = 'USER';

create index if not exists ix_exercises_scope on exercises (scope);
create index if not exists ix_exercises_owner_user_id on exercises (owner_user_id);
create index if not exists ix_exercises_active on exercises (active);
create index if not exists ix_exercises_movement_pattern on exercises (movement_pattern);
create index if not exists ix_exercises_body_area on exercises (body_area);
