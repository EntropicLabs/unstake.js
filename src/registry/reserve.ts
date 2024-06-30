import type { Registry } from ".";
const registry = {
    "harpoon-4": {
        "kujira1yphr700vldghkkzlu40sek4kuwu8nxaglvg88e3vf9hnf6cdc2ssqgcjpx": {
            "address": "kujira1yphr700vldghkkzlu40sek4kuwu8nxaglvg88e3vf9hnf6cdc2ssqgcjpx",
            "base_denom": "factory/kujira14qqwk3655csqvcg5ft37z25aped46s86vplma4mstp73r0nuy8dqy2xh84/unut",
            "rsv_denom": "factory/kujira1yphr700vldghkkzlu40sek4kuwu8nxaglvg88e3vf9hnf6cdc2ssqgcjpx/ursv",
            "ghost_denom": "factory/kujira12sshpyzypthq0p8v6lkmrpga5cs6kghanjmkus6dzch5xq05q6fqxxm928/urcpt",
            "ghost_vault_addr": "kujira12sshpyzypthq0p8v6lkmrpga5cs6kghanjmkus6dzch5xq05q6fqxxm928",
            "creation": 0
        },
        "kujira148xgyh79u0wnppc94hdgs0npdtyd8uexm9lvg4njvy4rekhftm4qukhm40": {
            "address": "kujira148xgyh79u0wnppc94hdgs0npdtyd8uexm9lvg4njvy4rekhftm4qukhm40",
            "base_denom": "ukuji",
            "rsv_denom": "factory/kujira148xgyh79u0wnppc94hdgs0npdtyd8uexm9lvg4njvy4rekhftm4qukhm40/ursv",
            "ghost_denom": "factory/kujira18txj8dep8n9cfgmhgshut05d9t4vjdphcd3dwl32vu4898w9uxnslaflur/urcpt",
            "ghost_vault_addr": "kujira18txj8dep8n9cfgmhgshut05d9t4vjdphcd3dwl32vu4898w9uxnslaflur",
            "creation": 0
        },
        "kujira1h4safa0mtt6aj9f022t3w2tsewresraz5hsycj8xjyged8su8yrqtazspd": {
            "address": "kujira1h4safa0mtt6aj9f022t3w2tsewresraz5hsycj8xjyged8su8yrqtazspd",
            "base_denom": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
            "rsv_denom": "factory/kujira1h4safa0mtt6aj9f022t3w2tsewresraz5hsycj8xjyged8su8yrqtazspd/ursv",
            "ghost_denom": "factory/kujira1dfk4fpjvmsngy774rhveprf78tczpr8qqzp2ndpqh6kqnuhlrwpsazthvz/urcpt",
            "ghost_vault_addr": "kujira1dfk4fpjvmsngy774rhveprf78tczpr8qqzp2ndpqh6kqnuhlrwpsazthvz",
            "creation": 0
        }
    },
    "kaiyo-1": {
        "kujira1644hwd9mjasvnjf2qcadlzxs6egs6d2km2k6lety9u5fdmhzfg0svr54zh": {
            "address": "kujira1644hwd9mjasvnjf2qcadlzxs6egs6d2km2k6lety9u5fdmhzfg0svr54zh",
            "base_denom": "ukuji",
            "rsv_denom": "factory/kujira1644hwd9mjasvnjf2qcadlzxs6egs6d2km2k6lety9u5fdmhzfg0svr54zh/ursv",
            "ghost_denom": "factory/kujira143fwcudwy0exd6zd3xyvqt2kae68ud6n8jqchufu7wdg5sryd4lqtlvvep/urcpt",
            "ghost_vault_addr": "kujira143fwcudwy0exd6zd3xyvqt2kae68ud6n8jqchufu7wdg5sryd4lqtlvvep",
            "creation": 1715355840
        },
        "kujira1vvquglh6dn35gz22t7dd05y5kpckjleudyw9x3n6hgd324vq0hyq66zca0": {
            "address": "kujira1vvquglh6dn35gz22t7dd05y5kpckjleudyw9x3n6hgd324vq0hyq66zca0",
            "base_denom": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
            "rsv_denom": "factory/kujira1vvquglh6dn35gz22t7dd05y5kpckjleudyw9x3n6hgd324vq0hyq66zca0/ursv",
            "ghost_denom": "factory/kujira1ya42knfcsvy6eztegsn3hz7zpjvhzn05ge85xa2dy2zrjeul9hnspp3c06/urcpt",
            "ghost_vault_addr": "kujira1ya42knfcsvy6eztegsn3hz7zpjvhzn05ge85xa2dy2zrjeul9hnspp3c06",
            "creation": 1715355840
        },
        "kujira168vaplwpxmfl9r95grtclh74fprle8f4g7rs4sn8ardf32pzaprq6r7ydk": {
            "address": "kujira168vaplwpxmfl9r95grtclh74fprle8f4g7rs4sn8ardf32pzaprq6r7ydk",
            "base_denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn",
            "rsv_denom": "factory/kujira168vaplwpxmfl9r95grtclh74fprle8f4g7rs4sn8ardf32pzaprq6r7ydk/ursv",
            "ghost_denom": "factory/kujira1fkstg6fspy2e2c0j28fampext5raesgc9np639sth8myrwglrfpqujrdfl/urcpt",
            "ghost_vault_addr": "kujira1fkstg6fspy2e2c0j28fampext5raesgc9np639sth8myrwglrfpqujrdfl",
            "creation": 1715355840
        }
    }
};
const typedRegistry: Registry<typeof registry> = registry;
export default typedRegistry;