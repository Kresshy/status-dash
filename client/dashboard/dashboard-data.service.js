angular.module('statusdash.dashboard.service.data', [])
    .factory('DashboarData', ['uuid2', function (uuid) {
        return DashboardData;

        function DashboardData(dashboard) {
            var _name = dashboard.name || 'Default name',
                _id = dashboard.id || uuid.newguid(),
                _items = dashboard.items || [];

            return {
                setName: function (name) {
                    _name = name;
                },
                getName: function () {
                    return _name;
                },
                getId: function () {
                    return _id;
                },
                setItems: function (items) {
                    _items = items;
                },
                getItems: function () {
                    return _items;
                },
                addItem: function (item) {
                    _items.push(item);
                },
                removeItem: function (id) {
                    _items.forEach(function (item, index) {
                        item.id === id ? delete _items[index] : '';
                    });
                }
            };
        }
    }])
    .factory('dashboardDataService', ['DashboardData', function (DashboardData) {
        var _dashboardData = new DashboardData();

        return {
            getDashboardData: function () {
                return _dashboardData;
            },
            setDashboardData: function (dashboardData) {
                _dashboardData = dashboardData
            }
        };
    }]);
