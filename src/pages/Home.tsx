import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Copy, ExternalLink } from 'lucide-react';
import { toast } from "sonner";

const Home: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFiles = Array.from(e.dataTransfer.files).slice(0, 5);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 5);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Link disalin ke clipboard!");
  };

  const startUpload = async () => {
    if (files.length === 0) {
      toast.error("Pilih file terlebih dahulu!");
      return;
    }
    setIsUploading(true);
    setUploadProgress(0);

    try {
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploadProgress(i);
      }

      const mockResults = files.map((_, idx) => `https://kabox.my.id/files/${Math.random().toString(36).substring(2, 10)}.jpg`);
      setResults(mockResults);
      setFiles([]);
      toast.success(`${files.length} file berhasil diupload!`);
    } catch (error) {
      toast.error("Gagal mengupload file");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Upload & Bagikan Media</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Upload file hingga 5 sekaligus dan dapatkan link CDN instan
        </p>
      </div>

      <Card className="mb-6 overflow-hidden">
        <CardContent className="p-6">
          <div 
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Seret & lepas file di sini, atau klik untuk memilih
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Maksimal 5 file, semua format didukung
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              className="hidden"              accept="*/*"
            />
          </div>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <span className="truncate text-sm">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                  >
                    Hapus
                  </Button>
                </div>
              ))}
            </div>
          )}

          <Button 
            className="w-full mt-4" 
            onClick={startUpload}
            disabled={files.length === 0 || isUploading}
          >
            {isUploading ? 'Mengupload...' : 'Mulai'}
          </Button>

          {isUploading && (
            <div className="mt-4">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                {uploadProgress}% selesai
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Hasil Upload</h3>
          {results.map((result, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Input                   readOnly 
                  value={result} 
                  className="flex-1 font-mono text-sm truncate"
                />
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => copyToClipboard(result)}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Salin
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(result, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Buka
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;