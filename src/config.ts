export const config = {
    serverUrls: {
        local: 'http://localhost:3001',
        remote: ''
    },
    CONSTANTS: {
        SORT: {
            sortOptionsDataSet: {
                title: 'Sort By',
                data: [
                    { text: 'Sort by event title', value: 'title'},
                    { text: 'Sort by event description', value: 'description'},
                    { text: 'Sort by event date', value: 'eventDate'},
                    { text: 'Sort by event organizer', value: 'organizer'},
                ] 
            },
            sortDirectionssDataSet: {
                title: 'select direction',
                data: [
                    { text: 'ascending', value: '1'},
                    { text: 'descending', value: '-1'},
                ] 
            }
        }
    }
};