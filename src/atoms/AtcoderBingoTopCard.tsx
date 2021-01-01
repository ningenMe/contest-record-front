import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';

export const AtcoderBingoTopCard: React.FC = () => {

    return (
        <Card style={{ backgroundColor: '#FEFAE3'}}>
            <CardContent>
                <Typography align="left">
                    AtCoderのコンテスト順位で1-25位を取った結果を確認できるアプリケーションです。
                </Typography>
            </CardContent>
        </Card>
      );
    }
export default AtcoderBingoTopCard