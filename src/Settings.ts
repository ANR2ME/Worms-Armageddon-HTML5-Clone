/**
 *  Global settings for the whole game
 *
 *  License: Apache 2.0
 *  author:  Ciar�n McCann
 *  url: http://www.ciaranmccann.me/
 */
module Settings
{
    export var PLAYER_TURN_TIME = 20 * 1000; // 60 secounds
    export var TURN_TIME_WARING = 5; // after 10 secounds warn player they are running out of time
    export var DEVELOPMENT_MODE = !false; 
    export var REMOTE_ASSERT_SERVER = "http://www.ciaranmccann.me/fyp/";
}