import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/upload',
      description: 'Upload file ke CDN',
      params: [],
      example: `curl -X POST \\
  -F "file=@image.jpg" \\
  https://kabox.my.id/api/upload`,
      response: `{
  "author": "aka",
  "email": "akaanakbaik17@proton.me",
  "success": true,
  "data": {
    "id": "abc123xyz",
    "url": "https://kabox.my.id/files/abc123xyz.jpg",
    "filename": "image.jpg",
    "size": 123456
  }
}`
    },
    {
      method: 'GET',
      path: '/files/:id/status',
      description: 'Periksa status upload',
      params: [{ name: 'id', type: 'string', required: true }],
      example: `curl https://kabox.my.id/files/abc123/status`,
      response: `{
  "author": "aka",
  "email": "akaanakbaik17@proton.me",
  "success": true,
  "data": {
    "id": "abc123",
    "name": "file.pdf",
    "size": 1048576,
    "status": "completed",
    "downloadUrl": "https://kabox.my.id/files/abc123/download"
  }
}`
    },
    {
      method: 'GET',
      path: '/files/:id',
      description: 'Dapatkan info file',      params: [{ name: 'id', type: 'string', required: true }],
      example: `curl https://kabox.my.id/files/abc123`,
      response: `{
  "author": "aka",
  "email": "akaanakbaik17@proton.me",
  "success": true,
  "data": {
    "id": "abc123",
    "name": "file.pdf",
    "size": 1048576,
    "mimeType": "application/pdf",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}`
    },
    {
      method: 'GET',
      path: '/files/:id/download',
      description: 'Download file',
      params: [{ name: 'id', type: 'string', required: true }],
      example: `curl -OJ https://kabox.my.id/files/abc123/download`,
      response: 'File stream'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Dokumentasi API</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Dokumentasi lengkap untuk integrasi API Kabox
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Endpoint Tersedia</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="overview">Ringkasan</TabsTrigger>
              <TabsTrigger value="examples">Contoh</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              {endpoints.map((endpoint, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">                      <Badge 
                        variant={
                          endpoint.method === 'GET' ? 'default' :
                          endpoint.method === 'POST' ? 'secondary' :
                          endpoint.method === 'DELETE' ? 'destructive' : 'outline'
                        }
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {endpoint.description}
                    </p>
                    
                    {endpoint.params.length > 0 && (
                      <div className="mt-3">
                        <h4 className="font-medium mb-2">Parameter:</h4>
                        <div className="space-y-2">
                          {endpoint.params.map((param, paramIdx) => (
                            <div key={paramIdx} className="flex items-center text-sm">
                              <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mr-2">
                                {param.name}
                              </code>
                              <span className="text-gray-600 dark:text-gray-400">
                                ({param.type}) {param.required ? 'wajib' : 'opsional'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-4">
              {endpoints.map((endpoint, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Badge 
                        variant={
                          endpoint.method === 'GET' ? 'default' :
                          endpoint.method === 'POST' ? 'secondary' :
                          endpoint.method === 'DELETE' ? 'destructive' : 'outline'
                        }                      >
                        {endpoint.method}
                      </Badge>
                      {endpoint.path}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">Contoh Request:</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-1">Contoh Response:</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                        <code>{endpoint.response}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiDocs;