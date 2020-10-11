import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class PackageScreen extends Component {
  render() {
    return (
      <WebView source={{ uri: 'https://thailandtourismdirectory.go.th/th/info/search/list?search=%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%99&province=80&maintype=&lat=&lng=' }} />
    );
  }
}
