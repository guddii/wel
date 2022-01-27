const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        games: './src/games',
        ideas: './src/ideas',
        lounge: './src/lounge',
        music: './src/music'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            workAdventure: {
                url: "guddii.github.io/wel",
                github: "github.com/guddii/wel",
                instance: Math.random().toString(36).substring(2, 15)
            },
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'game_skribbleio.html',
            template: './src/game.tpl.html',
            game: {
                name: "skribbl.io",
                url: "https://skribbl.io/",
                pattern: "^https:\\/\\/skribbl\\.io\\/",
                inGameStep: "Innerhalb des Spiels müssen sie auf \"Create Private Room\" klicken. Den Link zum Kopieren finden Sie unter \"Invite your friends!\"."
            }
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'game_garticphone.html',
            template: './src/game.tpl.html',
            game: {
                name: "Gartic Phone",
                url: "https://garticphone.com/",
                pattern: "^https:\\/\\/garticphone\\.com\\/",
                inGameStep: "Innerhalb des Spiels müssen sie auf \"Start\" klicken. Den Link kopieren Sie, indem Sie auf \"Einladen\" klicken."
            }
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'game_stadtlandfluss.html',
            template: './src/game.tpl.html',
            game: {
                name: "Stadt Land Fluss",
                url: "https://stadtlandfluss.cool/",
                pattern: "^https:\\/\\/stadtlandfluss\\.cool\\/",
                inGameStep: "Innerhalb des Spiels müssen sie auf \"Spiel erstellen\" klicken. Den Link kopieren Sie, indem Sie auf \"Kopieren\" klicken."
            }
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'whiteboard_1.html',
            template: './src/generic.tpl.html',
            generic: {
                name: "Whiteboard 1",
                host: "https://www.tryeraser.com/",
                url: "https://app.tryeraser.com/workspace/w13pH31Vy09PmrCHMgEJ"
            }
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'whiteboard_2.html',
            template: './src/generic.tpl.html',
            generic: {
                name: "Whiteboard 2",
                host: "https://www.tryeraser.com/",
                url: "https://app.tryeraser.com/workspace/ZRmGdN0Hivpa45xOi0Tx"
            }
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'whiteboard_3.html',
            template: './src/generic.tpl.html',
            generic: {
                name: "Whiteboard 3",
                host: "https://www.tryeraser.com/",
                url: "https://app.tryeraser.com/workspace/okN39VHJtBxDbUjaZkck"
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "*.json",
                    context: "src/"
                },
                {
                    from: "*/*.*",
                    context: "src/"
                }
            ],
        })
    ]
};
