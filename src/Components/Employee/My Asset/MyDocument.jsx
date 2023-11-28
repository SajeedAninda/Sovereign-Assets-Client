import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#05386B',
        color: '#5CDB95'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontSize: '24px',
    },
    section2: {
        marginTop: 40,
        flexGrow: 1,
        fontSize: '18px',
        position: 'absolute', 
        bottom: 0,
        marginBottom:15
    },
    section3: {
        marginTop: 20,
        fontSize: '24px'
    },
});
const currentDate = new Date();

const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
});



// Create Document Component
const MyDocument = ({ assetId }) => {
    // const axiosInstance = useAxiosInstance();

    let [asset, setAsset] = useState(null)

    useEffect(() => {
        axios.get(`/getAssetDataPDF/${assetId}`)
            .then(res => {
                setAsset(res.data);
            })
    }, [assetId])

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.section3}>Company Name: {asset?.assetCompany}</Text>
                    <Text style={styles.section3}>Asset Name: {asset?.productName}</Text>
                    <Text style={styles.section3}>Asset Type: {asset?.productType}</Text>
                    <Text style={styles.section3}>Total Available Products: "{asset?.productQuantity}" until The time of this PDF Creation</Text>
                    <Text style={styles.section3}>
                        Asset Listed On: {asset?.dateAdded &&
                            new Date(asset.dateAdded).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                    </Text>

                    <Text style={styles.section3}>Asset Listed By: {asset?.assetPostedBy}</Text>
                </View>

                <View style={styles.section2}>
                    <Text>Print Date: {formattedDate}</Text>
                </View>

            </Page>
        </Document>
    );
};

export default MyDocument;
