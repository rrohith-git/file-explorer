const ExplorerData = {
    id: '1',
    name: 'root',
    isFolder: true,
    items: [{
        id: '2',
        name: 'public',
        isFolder: true,
        items: [{
            id: '3',
            name: 'index.html',
            isFolder: false,
            items: []
        },
        {
            id: '4',
            name: 'manifest.json',
            isFolder: false,
            items: []
        },
        {
            id: '5',
            name: 'images',
            isFolder: true,
            items: [{
                id: '6',
                name: 'logo.png',
                isFolder: false,
                items: []
            },
            {
                id: '7',
                name: 'profile.png',
                isFolder: false,
                items: []
            }]
        }]
    },
    {
        id: '8',
        name: 'src',
        isFolder: true,
        items: [{
            id: '9',
            name: 'components',
            isFolder: true,
            items: [{
                id: '10',
                name: 'App.jsx',
                isFolder: false,
                items: []
            },
            {
                id: '14',
                name: 'navbar.jsx',
                isFolder: false,
                items: []
            }]
        }]
    },
    {
        id: '12',
        name: 'index.js',
        isFolder: false,
        items: []
    },
    {
        id: '13',
        name: 'package.json',
        isFolder: false,
        items: []
    },
    {
        id: '15',
        name: 'package-lock.json',
        isFolder: false,
        items: []
    }]
};

export default ExplorerData;