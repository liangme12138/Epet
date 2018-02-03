<?php
//载入ucpass类
require_once('lib/Ucpaas.class.php');

//初始化必填
//填写在开发者控制台首页上的Account Sid
$options['accountsid']='67fd9b636cb1ddbc8921a83480fa2bb7';
//填写在开发者控制台首页上的Auth Token
$options['token']='1a2ab5fc80cf147fb1a291b01234d5de';

//初始化 $options必填
$ucpass = new Ucpaas($options);